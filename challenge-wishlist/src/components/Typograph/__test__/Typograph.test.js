import { render, screen } from "@testing-library/react";
import Typography from "..";
import { Colors, Presets, Weight } from "../presets";

const mockTypographProps = {
  preset: "h1",
  htmlTag: "h2",
  weight: "bold",
  color: "black",
  children: "Typography",
};

describe("Typograph tests", () => {
  it("Should render with the right presets, tag and colors given as props", () => {
    const { preset, htmlTag, weight, color, children } = mockTypographProps;
    const classNames = Presets[preset].fonts;
    const classColor = Colors[color]
    const classWeight = Weight[weight]

    render(
      <Typography
        preset={preset}
        htmlTag={htmlTag}
        weight={weight}
        color={color}
      >
        {children}
      </Typography>
    );

    const element = screen.getByText(children);

    expect(element).toBeTruthy();
    expect(element.tagName).toEqual(htmlTag.toUpperCase());
    expect(element).toHaveClass(classNames);
    expect(element).toHaveClass(classColor);
    expect(element).toHaveClass(classWeight);
  });
});
