import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const StyledCard = styled.a`
    display: block;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadows.small};
    display: flex;
    flex-direction: column;
    padding: 2em;
    text-decoration: none;
    text-align: center;
    font-size: 1.3rem;

    > p {
        margin-top: 1em;
        font-size: 4rem;
    }

    &:hover {
        text-decoration: underline;
    }
`;

export interface CardProps {
    title: string;
    linkPath: string;
}

export const Card = ({ title, linkPath }: CardProps) => (
    <Link href={linkPath} passHref data-testid="card-link">
        <StyledCard>
            <h3>{title}</h3>
        </StyledCard>
    </Link>
);
