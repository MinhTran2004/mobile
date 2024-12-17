const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Account', 
        required: true 
    },
    productId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Products', 
        required: true 
    }
}, {
    timestamps: true 
});

const Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;
