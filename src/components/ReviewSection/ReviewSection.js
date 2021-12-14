import React from 'react';

import {
    Section,
	ReviewText,
	ReviewBody,
	FlexDiv,
	ReviewButton,
	ScrollItem,
	Circle,
	RedCircle,
	BorderedCircle
} from './ReviewSection.elements';

import {
    Heading2,
    Paragraph,
	Image
} from '../commonStyles';

import ReviewCard from './ReviewCard'; 

import rob from "../../assets/rob.png";
import kim from "../../assets/kim.png";
import yess from "../../assets/yess.png";
import left from '../../assets/arrowLeft.svg'; 
import right from "../../assets/arrowRight.svg";

const ReviewSection = () => {
    return (
		<Section>
			<ReviewText>
					<Heading2>Trusted by Thousands of Happy Customer</Heading2>
					<Paragraph>
						These are the stories of our customers who have joined us with great pleasure when using
						this crazy feature.
					</Paragraph>
			</ReviewText>
			<ReviewBody>
				<ReviewCard
					img={kim}
					name="Kim Young Jou"
					location="Seoul, South Korea"
					review="“This is very unusual for my business that currently requires a virtual private network that has high security.”."
					/>
				<ReviewCard
					img={rob}
					name="Viezh Robert"
					location="Warsaw, Poland"
					review="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
					/>
				<ReviewCard
					img={yess}
					name="Jessica Burtons"
					location="Shanxi, China"
					review="“I like it because I like to travel far and still can connect with high speed.”."
				/>
			</ReviewBody>
			<ReviewButton>
				<FlexDiv>
					<ScrollItem />
					<Circle />
					<Circle />
					<Circle />
				</FlexDiv>
				<FlexDiv>
					<BorderedCircle>
						<Image src={left}></Image>
					</BorderedCircle>
					<RedCircle ml="20px">
						<Image src={right}></Image>
					</RedCircle>
				</FlexDiv>
			</ReviewButton>
		</Section>
	);
}

export default ReviewSection
