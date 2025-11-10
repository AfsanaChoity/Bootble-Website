import React from 'react'
import { Button,  } from 'antd';
import Link from 'node_modules/next/link';
export default function CustomOutlineBtn({ text, path }) {
  return (
    <div>
       <Link href={path} className="px-6 py-2 border-2 border-gray-400 text-gray-700 rounded hover:bg-gray-50 transition-colors font-medium">
            {text}
          </Link>
    </div>
  )
}
