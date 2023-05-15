import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const UserCard = ({data: {first_name,last_name,avatar,email}}) =>{
    return(
        <>
        <Card>
            <CardImg 
                alt="user"
                src={avatar}
                />
            <CardBody>
                <CardTitle>{first_name} {last_name}</CardTitle>
                <CardText> email : {email}</CardText>
            </CardBody>
        </Card>
        </>
    )
}

export default UserCard;