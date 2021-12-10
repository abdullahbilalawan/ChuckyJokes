import React from 'react';
import "./Navbar.scss"


export default function Navbar() {
	return (
		<div className="container">
			<div >
				<nav className ="Nav">
					<ul>
						<li>
							<a href="#">SO FUNKTIONIERTS</a>
						</li>
						<li>
							<a href="#">SONDERANGEBOTE</a>
						</li>
						<li>
							<a href="#">
								Portfolio
							</a>
						</li>
						
						<a href="#" id="menu-icon"></a>
					</ul>
				</nav>
			</div>
		</div>
	);
}
