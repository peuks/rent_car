import styled from "styled-components";

export interface IMarginerProps {
  margin: number | string;
  direction?: "horizontal" | "vertical";
}

const HorizontalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

/**
 *
 * @param param0
 * @param direction  horizontal|vertical
 * @param props
 * @returns
 */
const Marginer = (
  { direction = "horizontal", margin }: IMarginerProps,
  props: IMarginerProps
) => {
  return direction === "horizontal" ? (
    <HorizontalMargin className="HorizontalMargin" margin={margin} />
  ) : (
    <VerticalMargin className="VerticalMargin" margin={margin} />
  );
};

export { Marginer };
