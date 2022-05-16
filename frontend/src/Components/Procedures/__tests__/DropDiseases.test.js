// https://robertmarshall.dev/blog/react-component-props-passed-to-child-jest-unit-test/
// import dependencies
import React from "react";
import { setupServer } from "msw/node";
import { rest } from "msw";

// import react-testing methods
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AxiosMock from "axios";
// import axios, { AxiosResponse } from "axios";
// Testing component
import DropDiseases from "./../DropDiseases";
import Procedures from "./../../../Pages/Procedures";
// afterEach(cleanup);

const server = setupServer(
  rest.get("http://localhost:4000/api/diseases/all/et/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userSuccessResponseJson()));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Test

test("fetches and displays data", async () => {
  AxiosMock.get.mockResolvedValue({ data: { dis_title_et: "Nahahaavad" } });
  const url = "http://localhost:4000/api/diseases/all/et/";
  const { getByTextId } = render(<DropDiseases url={url} />);
  // On first render, we expect the "loading" span to be displayed
  expect(getByTextId("diseasesId")).toHaveTextContent("Nahahaavad");
  const resolveElement = await waitFor(() => getByTextId("dis_title_et"));

  expect(resolveElement.textContent).toBe("Nahahaavad");

  expect(AxiosMock.get).toHaveBeenCalledTimes(1);
  expect(AxiosMock.get).toHaveBeenCalledWith(url);
});

// describe("true is truthy and false is falsy", () => {
//   test("true is truthy", () => {
//     expect(true).toBe(true);
//   });

//   test("false is falsy", () => {
//     expect(false).toBe(false);
//   });
// });
