import React,{useState} from "react"
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const AddTransaksi = () => {
    const [tanggal, setTanggal] = useState("");
    const [kategori, setKategori] = useState("");
    const [nominal, setNominal] = useState("");
    const [keterangan, setKeterangan] = useState("");

    const saveTransaksi = async (e) =>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/transaksi',{
                tanggal,
                kategori,
                nominal,
                keterangan
            });
        }catch(error){
            console.log(error);
        }
    }


    return(
        <Form onSubmit={saveTransaksi}>
            <Form.Group controlId="tanggal_transaksi">
                <Form.Label>Tanggal Transaksi</Form.Label>
                <Form.Control 
                    type="date"
                    value={tanggal}
                    onChange={(e)=> setTanggal(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="kategori">
                <Form.Label>Kategori</Form.Label>
                <Form.Control 
                    as="select" 
                    value={kategori}
                    onChange={(e)=> setKategori(e.target.value)}
                >
                    <option value = "Pemasukan">Pemasukan</option>
                    <option value = "Pengeluaran">Pengeluaran</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="nominal">
                <Form.Label>Nominal</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder = "Masukkan nominal uang"
                    value={nominal}
                    onChange={(e)=> setNominal(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="keterangan">
                <Form.Label>Keterangan</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder = "Masukkan keterangan" 
                    value={keterangan}
                    onChange={(e)=> setKeterangan(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form> 
    )
}

export default AddTransaksi

           