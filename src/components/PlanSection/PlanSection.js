import React from 'react'
import { 
    Section,
    SectionHeader,
    SectionBody,
    Plan,
    PlanImg,
    PlanMenu,
    PlanElement,
    CheckImg,
    PlanSelect,
    PlanSelectButton
} from './PlanSection.elements';
import {
    Heading1,
    Heading2,
    Paragraph,
    PerMonthSpan
} from '../commonStyles';
import plan from "../../assets/plan.svg";
import check from "../../assets/check.svg";

const PlanSection = () => {
    return (
        <Section>
            <SectionHeader>
                <Heading1>Choose Your Plan</Heading1>
                <Paragraph>
                    Let's choose the package that is best for you and explore it happily and cheerfully.
                </Paragraph>
            </SectionHeader>

            <SectionBody>
                <Plan>
                    <CheckImg src={plan} alt="plan" />
                    <Heading2>Free Plan</Heading2>
                    <PlanMenu>
                        <PlanElement>
                            <CheckImg src={check} alt="check" />
                            <Paragraph>Unlimited Bandwidth</Paragraph>
                        </PlanElement>
                        <PlanElement>
                            <CheckImg src={check} alt="check" />
                            <Paragraph>Encrypted Connection</Paragraph>
                        </PlanElement>
                        <PlanElement>
                            <CheckImg src={check} alt="check" />
                            <Paragraph>No Traffic Logs</Paragraph>
                        </PlanElement>
                        <PlanElement>
                            <CheckImg src={check} alt="check" />
                            <Paragraph>Works on All Devices</Paragraph>
                        </PlanElement>
                    </PlanMenu>
                    <PlanSelect>
                        <Heading2>Free</Heading2>
                        <PlanSelectButton>
                            Select
                        </PlanSelectButton>
                    </PlanSelect>
                </Plan>
                <Plan>
                    <PlanImg src={plan} alt="plan" />
                    <Heading2>Standard Plan</Heading2>
                    <PlanMenu>
                        <PlanElement>
                            <CheckImg src={check} alt="check" />
                            <Paragraph>Unlimited Bandwidth</Paragraph>
                        </PlanElement>
                        <PlanElement>
                            <CheckImg src={check} alt="check" />
                            <Paragraph>Encrypted Connection</Paragraph>
                        </PlanElement>
                        <PlanElement>
                            <CheckImg src={check} alt="check" />
                            <Paragraph>Yes Traffic Logs</Paragraph>
                        </PlanElement>
                        <PlanElement>
                            <CheckImg src={check} alt="check" />
                            <Paragraph>Works on All Devices</Paragraph>
                        </PlanElement>
                        <PlanElement>
                            <CheckImg src={check} alt="check" />
                            <Paragraph>Connect Anywhere</Paragraph>
                        </PlanElement>
                    </PlanMenu>
                    <PlanSelect>
                        <Heading2>
                            $9 <PerMonthSpan>/ mo</PerMonthSpan>
                        </Heading2>
                        <PlanSelectButton>
                            Select
                        </PlanSelectButton>
                    </PlanSelect>
                </Plan>
                <Plan>
                    <PlanImg src={plan} alt="plan" />
                    <Heading2>Premium Plan</Heading2>
                    <PlanMenu>
                        <PlanElement>
                            <CheckImg src={check} alt="check" />
                            <Paragraph>Unlimited Bandwidth</Paragraph>
                        </PlanElement>
                        <PlanElement>
                            <CheckImg src={check} alt="check" />
                            <Paragraph>Encrypted Connection</Paragraph>
                        </PlanElement>
                        <PlanElement>
                            <CheckImg src={check} alt="check" />
                            <Paragraph>Yes Traffic Logs</Paragraph>
                        </PlanElement>
                        <PlanElement>
                            <CheckImg src={check} alt="check" />
                            <Paragraph>Works on All Devices</Paragraph>
                        </PlanElement>
                        <PlanElement>
                        <CheckImg src={check} alt="check" />
                            <Paragraph>Connect Anywhere</Paragraph>
                        </PlanElement>
                        <PlanElement>
                            <CheckImg src={check} alt="check" />
                            <Paragraph>Get New Features</Paragraph>
                        </PlanElement>
                    </PlanMenu>
                    <PlanSelect>
                        <Heading2>
                            $12 <PerMonthSpan>/ mo</PerMonthSpan>
                        </Heading2>
                        <PlanSelectButton>
                            Select
                        </PlanSelectButton>
                    </PlanSelect>
                </Plan>
            </SectionBody>
        </Section>
    )
}

export default PlanSection
