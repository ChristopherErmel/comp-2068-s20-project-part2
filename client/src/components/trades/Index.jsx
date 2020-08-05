import React, {useEffect, useState} from 'react';
import {Container, Fragment} from 'react-bootstrap';
import Axios from 'axios';
// import { toast } from 'react-toastify';
import {Link} from 'react-router-dom';


const Index = function ({user}) {
    const [trades, setTrades] = useState([]);

    useEffect(() => {
        (async () => {
            await getTrades();
        })();
    }, []);



    const getTrades = async () => {
        const tradesResp = await Axios.get('/api/trades');
        console.log(tradesResp)
        if (tradesResp.status === 200) setTrades(tradesResp.data);
    };

    // const deleteTrade = async trade => {
    //     try {
    //         //gets the trade id
    //         const resp = await Axios.post('/api/trades/delete', {
    //             id: trade._id
    //         });
    //         // if(resp.status === 200) toast("The trade was deleted successfully!", {type: toast.TYPE.SUCCESS});
    //         await getTrades();
    //     }catch (error){
    //         // toast('There was an error deleting the trade.', {
    //         //     type: toast.TYPE.ERROR
    //         // });
    //     }
    // };

// styling
const divCardStyle = {
    width: "20rem",
     height: "18.5rem",
      margin: "1.3em",
       float: "left"
  };

  const divTitleStyle = {
     height: "3em"
  };

  const divShortNameStyle = {
    fontWeight: "bold"
 };

 const divUpDateStyle = {
    float: "right"
 };



    return (
        <Container>
            <header>
                <h1>Archive</h1>
            </header>
            <hr />
            <div className="content">
                {trades && trades.map((trade, i) => (
                    <div key={i} className="card my-3" style={divCardStyle}>
                            <div className="card-body">
                                <h5 className="card-title" style={divTitleStyle}>
                                    <p>{trade.tradeType} {trade.cardLevel} {trade.title}</p></h5>
                                    {trade.user ? (
                                        <small style={divShortNameStyle}>by ~{trade.user.shortName}</small>
                                    ) : null}
                                    <small style={divUpDateStyle}>~{trade.updatedAt.toLocaleString("en-US")}</small>
                                    <hr />
                                    <p className="card-text">Buy Now: ~{trade.buyNow}c</p>
                                    <p className="card-text">Currently: ~{trade.tradeStatus}</p>
                                    <hr></hr>
                                    <Link className="btn btn-primary" to={{pathname: `/trades/{trade.id}`}} href="/trades/<%= trade.id %>">View</Link>
                    
                   
                    {/* {user ? (
                        <div className="card-footer">
                            <Link to={{
                                pathname: "/trades/edit",
                                state: {
                                    id: blog._id
                                }
                            }}>
                                <i className="fa fa-edit"></i>
                            </Link>

                            <button type="button" onClick={() => deleteTrade(trade)}>
                                <i className="fa fa-trash"></i>
                            </button>

                        </div>
                    ) : null} */}
                    </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Index;