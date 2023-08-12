import data from './db.json'
export default async function bookables(req, res){
    if(req.method === "GET"){
        setTimeout(()=> {
            return res.status(200).json({
                bookables: data.bookables,
                sessions: data.sessions,
                days: data.days
            })
        }, 0)
    }
}
