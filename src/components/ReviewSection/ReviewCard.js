import React from "react";
import {
    Section,
    CardHeader,
    ReviewProfile,
    ReviewName,
    ReviewLocation,
    ReviewStar,
    CardBody
} from './ReviewCard.elements';

import {
    Div,
    Image,
    Paragraph
} from '../commonStyles'

import star from "../../assets/star.svg";

const ReviewCard = (props) => {
	return (
		<Section>
			<CardHeader>
				<Image src={props.img}></Image>
				<ReviewProfile>
					<ReviewName>{props.name}</ReviewName>
					<ReviewLocation>{props.location}</ReviewLocation>
				</ReviewProfile>
				<ReviewStar>
					<Paragraph>4.5</Paragraph>
                    <Image src={star}></Image>
				</ReviewStar>
			</CardHeader>
			<CardBody>{props.review}</CardBody>
		</Section>
	);
};

export default ReviewCard;
