const User = require('../model/UserModel')

module.exports.addToLikeMovies = async(req,res) => {
    try{
        const {email,data} = req.body
        const user = await User.findOne({email})
        if(user) {
            const {likeMovies} = user;
            const movieAlreadyLiked = likeMovies.find(({ id }) => id === data.id);
            if(!movieAlreadyLiked) {
                const addToLike = await User.findByIdAndUpdate(user._id,{
                        likeMovies: [...user.likeMovies,data]
                    },
                    {   new:true
                    }
                )
                res.status(200).json({msg:'movies liked successfully'})
            } else {
                res.status(201).json({msg:'movies already liked'})
            }
        } else {
            console.log('user create and add liked')
            await User.create({email,likeMovies:[data]})
            res.status(200).json({msg:'movies liked successfully'})
        }  

    } catch(error) {
        console.log(error)
        return res.status(500).json({msg:'Error adding movie'})
    }
}

module.exports.getLikeMovies = async(req,res) => {
    try {
        const {email} = req.params;
        const user = await User.findOne({email})
        if(user) {
            res.status(200).json({msg:'movies get successfully',movies:user.likeMovies})
        } else {
            res.status(204).json({msg:'User not found'})
        }
    } catch(error) {
        console.log(error)
        return res.status(500).json({msg:'Error adding movie'}) 
    }
}

module.exports.removeFromLikeMovie =  async(req,res) => {
    try {
        const {email,movieId} = req.body
        const user = await User.findOne({email})
        console.log('delete api user',user);
        if(user) {
            let movies = user.likeMovies;
            const movieIndex  = movies.findIndex(({ id }) => id === movieId);
            console.log('delete movieIndex',movieIndex);
            if(movieIndex < 0) {
                res.status(204).json({msg:'movies not found'})
            } else {
                console.log('else movie slice');
                movies.splice(movieIndex,1)
                console.log('after slice',movies)
                const updatedmovies =  await User.findByIdAndDelete(user._id,{
                        likeMovies: movies
                    },
                    {   new:true
                    }
                )
                console.log('updatedmovies',updatedmovies)
                res.status(200).json({msg:'movies dislike successfully',movies:movies})
            }
        } else {
            res.status(200).json({msg:'user not found'})
        }
    } catch(error) {
        console.log(error)
        return res.status(500).json({msg:'Error deleting movie'}) 
    }
}   