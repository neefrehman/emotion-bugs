import React from "react";
import type { GetStaticProps } from "next";
import Link from "next/link";
import styled from "@emotion/styled";

const StyledHomePage = styled.div`
    padding: clamp(26px, 5vw, 40px) clamp(26px, 4vw, 48px);
    box-sizing: border-box;
    height: 100vh;
    width: max-content;

    header {
        padding-bottom: clamp(30px, 4vh, 35px);
        transform: scale(1.02, 1);
        transform-origin: left;

        h1 {
            white-space: nowrap;
            padding-right: 1em;
        }
    }
`;

const StyledLinkList = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: max-content;
    height: calc(100% - 70px);

    li {
        margin: 0 1em 1em 0;

        a:visited {
            color: ${({ theme }) => theme.colors.offBlack};
            background-color: ${({ theme }) => theme.colors.offWhite};

            :hover {
                background-color: ${({ theme }) => theme.colors.offWhiteHover};
            }
        }
    }
`;

const SketchLink = ({ id }: { id: string }) => (
    <li>
        <Link href={`/${id}`}>
            <a>{id}</a>
        </Link>
    </li>
);

interface HomePageProps {
    linkArray: string[];
}

const Home = ({ linkArray }: HomePageProps) => {
    return (
        <StyledHomePage>
            <header>
                <h1>emotion autoLabel test</h1>
            </header>

            <StyledLinkList>
                {linkArray.map(sketchId => (
                    <SketchLink key={sketchId} id={sketchId} />
                ))}
            </StyledLinkList>
        </StyledHomePage>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const linkArray = [
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
        "A Link",
    ];

    return { props: { linkArray: linkArray.concat(linkArray).concat(linkArray) } };
};

export default Home;
