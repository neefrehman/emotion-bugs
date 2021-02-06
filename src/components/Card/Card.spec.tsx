import React from "react";
import { render, screen } from "test-utils";

import { Card } from "./index";
import type { CardProps } from "./index";

const testProps: CardProps = {
    title: "Card Title",
    linkPath: "/404",
};

describe("Card", () => {
    describe("When the Card component mounts", () => {
        beforeEach(() => render(<Card {...testProps} />));
        it("It renders correctly", () => {
            expect(screen.getByTestId("card-link")).toBeInTheDocument();
        });
    });
});
