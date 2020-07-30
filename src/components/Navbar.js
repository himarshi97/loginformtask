// import React, { useState } from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from "reactstrap";

// const Example = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar light expand="md" className="navbar">
//         <Collapse isOpen={isOpen} navbar>
//           <Col>
//             <Nav className="mr-auto" navbar>
//               <NavItem>
//                 <NavLink href="/components/" style={{ color: "white" }}>
//                   Home
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="/components/" style={{ color: "white" }}>
//                   Paste
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="/components/" style={{ color: "white" }}>
//                   Tools
//                 </NavLink>
//               </NavItem>
//             </Nav>
//           </Col>
//           {/* {<NavbarText> <FontAwesomeIcon
//                     icon={faUserCircle}
//                     color="white"
//                     className="usericon"
//                   />
//                   {username}</NavbarText>} */}
//           <button title="logout">{/* Logout */}</button>
//         </Collapse>
//         <NavbarToggler onClick={toggle} />
//       </Navbar>

//       {/* <Navbar color="light" light expand="md">
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Home</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/components/">Tools</NavLink>
//             </NavItem>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar> */}
//     </div>
//   );
// };

// export default Example;
