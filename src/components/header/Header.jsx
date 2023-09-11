import React from "react";
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { IconButton } from "@mui/material"
import { navbar } from "../../data"
import Tooltip from "@mui/material/Tooltip"

export default function Header() {
  return (
    <div className=" top-0 left-0 right-0 sticky  py-5 bg-zinc-800 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex w-full items-center ml-4">
          <img className="w-36" src="image/bitpin.svg" />
          <ul className="flex items-center pr-12">
            {navbar.map(list => (
              <li className="px-6 relative" key={list.id}>
                <div className="text-gray-200 font-medium cursor-pointer">{list.title}</div>
                <div className="absolute -top-2.5 left-0 bg-emerald-400 px-2 text-xs rounded-md text-white">{list.new}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-4">
          <Tooltip arrow title="دارک مود">
            <IconButton aria-label="sun" sx={{ color: "white" }}>
              <WbSunnyOutlinedIcon fontSize='medium' />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="دانلود">
            <IconButton aria-label="mobile" sx={{ color: "white" }}>
              <InstallMobileIcon fontSize='medium' />
            </IconButton>
          </Tooltip>
          <div className="w-32">
            <button className="bg-emerald-400 w-full py-3 rounded-lg text-zinc-800 font-medium">ورود / ثبت‌نام</button>
          </div>
        </div>
      </div>
    </div>
  )
}