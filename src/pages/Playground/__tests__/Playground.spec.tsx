import { Playground } from '../index';

import { render } from "@testing-library/react";
import { describe, test } from "vitest";

describe(`Test render Playground's page`, () => {
  test(`Should be render correctly page`, () => {

    const { getByLabelText } = render(<Playground />);

    const container = getByLabelText(/playground_page/);

    expect(container).toBeInTheDocument()

  })
})
