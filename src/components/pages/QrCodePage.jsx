import { useEffect, useState } from 'react'
import axios from 'axios'
import QRCodeGenerator from '../../QrCodeGenerator'
import SinglePost from '../SinglePost'

import { useNavigate } from 'react-router-dom'


function QrCodePage() {  

  const [posts, setPosts] = useState([])
  let navigate = useNavigate();
  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
  console.log(url_string)
  console.log(url)
  console.log(id)

  useEffect(() => {
    async function getPosts() {
      const result = await axios.get("/api/post/" + id)
      setPosts(result.data)
    }
    getPosts()
  }, [])


  if(posts.imageUrl)
  return (
    <div className="QrCodePage">
      <div className="flex flex-col space-y-100 items-center divide-y">
          <div key={`post-${posts.id}`} className="px-5 py-14">
            <QRCodeGenerator url={posts.imageUrl} />
          </div>
      </div>

    </div>
  )
  else
  return (
    <div className="QrCodePage">
    </div>
  )
}

export default QrCodePage
