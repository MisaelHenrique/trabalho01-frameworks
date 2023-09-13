const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');

//tudo que é criado será exportado
module.exports = {
    cadastroUser: async(req,res) => {
        const{name, email, password} = req.body;

        const userExists = await prisma.user.findUnique({
            where:{name: name, email: email}
        })

        if(userExists) {
            return res.status(400).json({message: "User already exists"});
        }

        const saltRounds = 8
        const hashSenha = await bcrypt.hash(password, saltRounds)

        const newUser = await prisma.user.create({
            data:{name: name, email: email, password: hashSenha}

        })

        return res.status(200).json({message: "User created", newUser});
    },

    login: async (req, res) => {
        const {name, email, password} = req.body;

        const user = await prisma.user.findUnique({
            where:{name: name, email: email}
        })

        if(!user) {
            return res.status(404).json({message: "User not found"});
        }

        const comparePass = await bcrypt.compare(user.password, password)

        if(!comparePass){
            return res.status(401).json({message: "Invalid credential"});
        }

        const userId = user.id
        const token = jwt.sign({userId},process.env.SECRET,{
            expiresIn: process.env.TIMEOUT
        })

        return res.status(200).json({auth: true, token: token})
    },

    logout : async (res) => {
        return res.status(200).json({auth: false, token: null})
    }
}