import React, {useState, useEffect} from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const TransactionList = () => {
const [transaksi, setTransaksi] = useState([]);

useEffect(()=>{
    getTransaksi();
},[]);

const getTransaksi = async () =>{
    const response = await axios.get('http://localhost:5000/transaksi');
    setTransaksi(response.data);
}


    return(
        <Table striped bordered hover style={{textAlign: "center"}}>
            <thead>
                <tr>
                    <th>Tanggal</th>
                    <th>Kategori</th>
                    <th>Nominal</th>
                    <th>Keterangan</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {transaksi.map((transaksi, index) => (
                    <tr key = {transaksi.id}>
                        <td>{transaksi.tanggal_transaksi.substring(0, 10)}</td>
                        <td>{transaksi.kategori}</td>
                        <td>Rp.{transaksi.nominal}</td>
                        <td>{transaksi.keterangan}</td>
                        <td>
                            <Button variant="primary">Edit</Button>
                            <Button variant="danger" style={{marginLeft: 20}}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default TransactionList