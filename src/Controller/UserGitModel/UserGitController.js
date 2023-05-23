import { GitUser} from '../../Model/UserGitModel.js';

export const mostrar = async (req,res) =>{
    try{
        const usergit = await GitUser.findAll();
        if(!usergit.length){
            return res.status(404).json('No existen datos de usuarios');
        }
        else{
            return res.status(200).json(usergit);
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

export const crear = async (req,res) =>{
    try{
        const usergit = await GitUser.create({
            where:{
                login:req.body.login,
                iduser:req.body.id,
                node_id:req.body.node_id,
                avatar_url:req.body.avatar_url,
                url:req.body.url,
                html_url:req.body.html_url,
                type:req.body.type,
                site_admin:req.body.site_admin,
                company:req.body.company,
                twitter_username:req.body.twitter_username,
                public_repos:req.body.public_repos,
                public_gists:req.body.public_gists,
                followers:req.body.followers,
                following:req.body.following,
            },
            defaults:{
                activo:1,
            }
        });
            return res.status(302).json({
                message:'Creado'
            });
    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}