import data from './db.json'
export default async function users(req, res){
    if(req.method === "GET"){
        setTimeout(()=> {
            return res.status(200).json({
                users: data.users
            })
        }, 0)
    }
}
