import { screen } from "@testing-library/react";

import Category from "../category.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: "mens",
  }),
}));

describe("Caregory tests", () => {
  test("it should render a Spinner if isLoading true", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          categories: [],
          isLoading: true,
        },
      },
    });

    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("it should render products if isLoading is false", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          categories: [
            {
              title: "mens",
              items: [
                { id: 1, name: "Product 1" },
                { id: 2, name: "Product 2" },
              ],
            },
          ],
          isLoading: false,
        },
      },
    });

    const spinnerElement = screen.queryByTestId("spinner");
    const product1Element = screen.getByText(/product 1/i);

    expect(spinnerElement).toBeNull();
    expect(product1Element).toBeInTheDocument();
  });
});
