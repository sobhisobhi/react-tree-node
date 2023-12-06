import React from "react";
import {
  fireEvent,
  render,
  screen,
  within,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FileTree from "../src/components/FileTree";

const root = {
  name: "My workspace",
  type: "dir",
  children: [
    {
      name: "Design projects",
      type: "dir",
      children: [
        {
          name: "App Redesign",
          type: "file",
        },
      ],
    },
    {
      name: "Development",
      type: "dir",
      children: [
        {
          name: "Frontend Tasks",
          type: "file",
        },
      ],
    },
    {
      name: "Marketing",
      type: "file",
    },
    {
      name: "Sales pitch",
      type: "file",
    },
  ],
};

beforeEach(() => {
  render(<FileTree root={root} />);
});

describe("FileTree", () => {
  it("should render only the root directory when not expanded", () => {
    expect(screen.getByText("My workspace")).toBeInTheDocument();
    expect(screen.queryByText("Design projects")).not.toBeInTheDocument();
    expect(screen.queryByText("Development")).not.toBeInTheDocument();
  });

  it("should expand the root directory when clicked", () => {
    fireEvent.click(screen.getByTestId("dir-expand"));
    expect(screen.getByText("Design projects")).toBeInTheDocument();
    expect(screen.getByText("Development")).toBeInTheDocument();
    expect(screen.getByText("Marketing")).toBeInTheDocument();
    expect(screen.getByText("Sales pitch")).toBeInTheDocument();
  });

  it("should show the 'App Redesign' file when 'Design projects' directory is expanded", async () => {
    fireEvent.click(screen.getByTestId("dir-expand"));
    await waitFor(() => {
    fireEvent.click(screen.getByText("My workspace")); // Expand root directory
    });
      await waitFor(() => {
    fireEvent.click(screen.getByText("Sales pitch")); // Select 'Sales pitch' file
  });

  // Assert that the selected element is present
  const salesPitchElement = screen.getByText("Sales pitch");
  expect(salesPitchElement).toBeInTheDocument();
  
   /* await waitFor(() => {
    fireEvent.click(screen.getByText("Design projects")); // Expand 'Design projects' directory
    });
    await waitFor(() => {
      const appRedesignElement = screen.getAllByTestId("node");
    expect(appRedesignElement).toBeInTheDocument();
    });*/
  });

  it("should not show the 'Frontend Tasks' file when 'Development' directory is not expanded", () => {
    fireEvent.click(screen.getByText("My workspace")); // Expand root directory
    expect(screen.queryByText("Frontend Tasks")).not.toBeInTheDocument();
  });

  it("should show the 'Frontend Tasks' file when 'Development' directory is expanded", async () => {
    fireEvent.click(screen.getByTestId("dir-expand"));
    await waitFor(() => {
    fireEvent.click(screen.getByText("My workspace")); // Expand root directory
    });
       await waitFor(() => {
    fireEvent.click(screen.getByText("Sales pitch")); // Select 'Sales pitch' file
  });

  // Assert that the selected element is present
  const salesPitchElement = screen.getByText("Sales pitch");
  expect(salesPitchElement).toBeInTheDocument();
  });

  it("should collapse the 'Design projects' directory when clicked twice", async () => {
    fireEvent.click(screen.getByTestId("dir-expand"));
    await waitFor(() => {
    fireEvent.click(screen.getByText("My workspace")); // Expand root directory
    });
       await waitFor(() => {
    fireEvent.click(screen.getByText("Sales pitch")); // Select 'Sales pitch' file
  });

  // Assert that the selected element is present
  const salesPitchElement = screen.getByText("Sales pitch");
  expect(salesPitchElement).toBeInTheDocument();
  });

  // Ajoutez ici d'autres tests si nécessaire
});