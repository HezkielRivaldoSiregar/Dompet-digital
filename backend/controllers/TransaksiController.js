import Transaksi from "../models/TransaksiModel.js";

export const getTransaksi = async(req, res) =>{
    try{
        const response = await Transaksi.findAll();
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const getTransaksiById = async(req, res) =>{
    try{
        const response = await Transaksi.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const createTransaksi = async(req, res) =>{
    try{
        await Transaksi.create(req.body);
        res.status(201).json({msg: "Transaksi Created"})
    }catch(error){
        console.log(error.message);
    }
}

export const updateTransaksi = async(req, res) =>{
    try{
        await Transaksi.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Transaksi Updated"})
    }catch(error){
        console.log(error.message);
    }
}

export const deleteTransaksi = async(req, res) =>{
    try{
        await Transaksi.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Transaksi Deleted"})
    }catch(error){
        console.log(error.message);
    }
}