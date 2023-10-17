import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "widgets/Sidebar";

describe("Sidebar", () => {
  test("with only first param", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("toggle sidebar", () => {
    componentRender(<Sidebar />);
    const toggleButton = screen.getByTestId("toggle-button");
    expect(screen.getByTestId("toggle-button"));
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
