import React, {useState} from 'react';
import {Form, Container} from 'react-bootstrap';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';
// import {toast} from 'react-toastify';

const New = function () {
    const [inputs, setInputs] = useState({
        title: '',
        trade: '',
        cardType: 'Base',
        cardLevel: '',
        buyNow: '',
        tradeStatus: 'Available',
        tradeType: 'Trading'
    });

    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const resp = await Axios.post('/api/trades', inputs);
            if(resp.status === 200){
                // toast('The blog was created successfully!', {
                //     type: toast.TYPE.SUCCESS
                // });
                setRedirect(true);
            }else {
                // toast('There was an error creating the blog.', {
                //     type: toast.TYPE.ERROR
                // });
            }
        }catch (error){
            // toast('There was an error creating the blog.', {
            //     type: toast.TYPE.ERROR
            // });
        }
    };


    const handleInputChange = async event => {
        event.persist();

        const {name, value} = event.target;

        setInputs(inputs => ({
            ...inputs,
            [name]: value
        }));
    };

    if(redirect) return (<Redirect to="/trades"/>);

    return (
        <Container className="my-5">
            <header>
                <h1>New Trade</h1>
            </header>        
        <hr />
            <div>


                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Trade Type:</Form.Label>
                        <Form.Control as="select" name="tradeType" onChange={handleInputChange} defaultValue={inputs.tradeType || 'Looking For'}>
                        <option value="Trading">Trading</option>
                        <option value="Looking For">Looking For</option>                        
                        </Form.Control>
                    </Form.Group>
                    </Form>


                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Player Name:</Form.Label>
                        <Form.Control as="textarea" name="title" onChange={handleInputChange} value={inputs.title}/>
                    </Form.Group>
                </Form>

                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Card Level:</Form.Label>
                        <Form.Control type="text" pattern="[0-9]*" name="cardLevel" onChange={handleInputChange} value={inputs.cardLevel}/>
                    </Form.Group>
                </Form>

                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Card Type:</Form.Label>
                        <Form.Control as="select" name="cardType" onChange={handleInputChange} defaultValue={inputs.cardType || 'Base'}>
                        <option value="Base">Base</option>
                        <option value="MSP">MSP</option>
                        <option value="SCP">SCP</option>
                        <option value="TOTW">TOTW</option>
                        <option value="TOTS">TOTS</option>
                        <option value="Drafts">Drafts</option>
                        <option value="Awards">Awards</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                    <Form onSubmit={handleSubmit}>
                    <Form.Group>
                            <Form.Label>TT Card List:</Form.Label>
                            <Form.Control as="textarea" name="trade" onChange={handleInputChange} value={inputs.trade}/>
                        </Form.Group>
                    </Form>

                    <Form onSubmit={handleSubmit}>
                    <Form.Group>
                            <Form.Label>Buy Now Amount(Coins):</Form.Label>
                            <Form.Control type="text" pattern="[0-9]*" name="buyNow" onChange={handleInputChange} value={inputs.buyNow}/>
                        </Form.Group>
                    </Form>


                    <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Trade Status:</Form.Label>
                        <Form.Control as="select" name="tradeStatus" onChange={handleInputChange} defaultValue={inputs.tradeStatus || 'Available'}>
                        <option value="Available">Available</option>
                        <option value="Traded">Traded</option>                        
                        </Form.Control>
                    </Form.Group>
                    </Form>

                    <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </Form.Group>
                    </Form>
            </div>
        </Container>
    );
};

export default New;