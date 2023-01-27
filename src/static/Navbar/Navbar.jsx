/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from "react-router-dom";
import { element } from "./navbarScript";
import "../navbarStyle.css";
import "./navbarScript";
import { DropdownMenu } from "./DropdownMenu/DropdownMenu";
import styled from "styled-components";

const NavStyled = styled.nav`
	color: white;
	background-color: rgb(101, 180, 96);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.3rem 2rem 0.3rem 2rem;
`;

const ImgStyled = styled.img`
	width: auto;
	height: 50px;
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

const NavItemsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 2rem;
`;

export default function Navbar() {
	return (
		<NavStyled>
			<div className="logo">
				<NavLink
					to="/"
					className={(isActive) => {
						return !isActive.isActive ? "unselected" : "selected";
					}}
				>
					<LogoContainer>
						<ImgStyled
							src="https://keepassxc.org/images/keepassxc-logo.svg"
							alt="keepass-xc logo"
						/>
						<h1>KeePassXC</h1>
					</LogoContainer>
				</NavLink>
			</div>

			<NavItemsContainer className="nav-items">
				<NavLink
					to="/Download"
					className={(isActive) => {
						return !isActive.isActive ? "unselected" : "selected";
					}}
				>
					Download
				</NavLink>
				<NavLink
					to="/About"
					className={(isActive) => {
						return !isActive.isActive ? "unselected" : "selected";
					}}
				>
					About
				</NavLink>
			</NavItemsContainer>
		</NavStyled>
	);
}
