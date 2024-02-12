import react, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Image,
    Card,
    Button,
    Badge,
} from "react-bootstrap";
import { useRentalContext } from "../utils/GlobalContext";
import {CREATE_CONTRACT, ADD_CONTRACT} from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";



export default function ContractPage() {
    const { user, addUser, shoppingCart } = useRentalContext();
    console.log('contractpage', shoppingCart);
    const [createContract, { createContractError }] = useMutation(CREATE_CONTRACT);
    const [addContract, { addContractError }] = useMutation(ADD_CONTRACT);

    // console.log(user);

    const handleRentContract =  async () => {
        // e.preventDefault();
        
        try {
            const contractData =  await createContract({
                variables: {
                   ...shoppingCart
                },
            });
            console.log("recievedContract",contractData.data.createContract);
            const newContract = contractData.data.createContract;

            const updatedUser = await addContract({
                variables: { 
                    userId: Auth.getProfile().data._id,
                    contractId: newContract._id
                }
            });

            console.log("addedToUser",updatedUser.data.addContractToUser);
            addUser(updatedUser.data.addContractToUser);
            console.log(user);

            // console.log("addedToUser",updatedUser.data.addContractToUser.contracts);

        } catch (err) {
            console.error(err);
        }
        // console.log(user);

    }


    return (
        <Container fluid>
            {!shoppingCart ? (
                <div>... Loading</div>
            ) : (
                <div>
                    <h2>Contract Page</h2>
                    <Row>
                        <Col sm={8}>{shoppingCart.userName}</Col>
                        <Col sm={8}>{shoppingCart.bikeInfo}</Col>
                        <Col sm={8}>{shoppingCart.rentalPerDay}</Col>
                        <Col sm={8}>{shoppingCart.insurancePerDay}</Col>
                        <Col sm={8}>{shoppingCart.duration}</Col>
                        <Col sm={8}>{shoppingCart.rentalPriceSub}</Col>
                        <Col sm={8}>{shoppingCart.rentalPriceTotal}</Col>

                    </Row>
                    <Button
                        id="rentButton"
                        variant="danger"
                        as={Link}
                        to="/contract"
                    // onClick={handleRentContract}
                    >
                        Cancel
                    </Button>
                    <Button
                        id="rentButton"
                        variant="primary"
                        as={Link}
                        to="/contract"
                    onClick={handleRentContract}
                    >
                        Checkout to Rent
                    </Button>
                </div>

            )}
        </Container>
    );
}