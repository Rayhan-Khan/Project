import { Outlet } from "react-router-dom";

export default function Header(){
   return<div> <h1>Header Or NavLink every page</h1>
   <Outlet/>
   </div>
}