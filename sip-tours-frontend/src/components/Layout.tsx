import styled from "styled-components";
import ThemeColor from "./ThemeColor";

// TODO decide if you should make a container with default 2vw top and bottom
// padding or just any general way to have default top and bottom padding since
// most pages need to have space between content, header and footer

type LayoutBackgroundProps = {
  $backgroundColor?: ThemeColor;
};

const LayoutBackground = styled.div<LayoutBackgroundProps>`
  ${(props) =>
    props.$backgroundColor && `background-color: ${props.$backgroundColor}`}
`;

type LayoutWrapperProps = {
  $fullWidth?: boolean;
  $fullHeight?: boolean;
};

const LayoutWrapper = styled.div<LayoutWrapperProps>`
  width: ${(props) => (props.$fullWidth ? "100vw" : "90vw")};
  ${(props) => props.$fullHeight && "height: 100vh"};
  margin-inline: auto;
`;

type LayoutProps = {
  style?: React.CSSProperties;
  backgroundStyle?: React.CSSProperties;
  children?: React.ReactNode;
  backgroundColor?: ThemeColor;
  fullWidth?: boolean;
  fullHeight?: boolean;
};

export default function Layout(props: LayoutProps) {
  return (
    <LayoutBackground
      style={props.backgroundStyle}
      $backgroundColor={props.backgroundColor}
    >
      <LayoutWrapper
        style={props.style}
        $fullWidth={props.fullWidth}
        $fullHeight={props.fullHeight}
      >
        {props.children}
      </LayoutWrapper>
    </LayoutBackground>
  );
}