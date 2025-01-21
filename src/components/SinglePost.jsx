import { ChatIcon, UserIcon, TrashIcon } from '@heroicons/react/solid'
import { HeartIcon as HeartOutline } from '@heroicons/react/outline'

export default function SinglePost({className, imageUrl}) {
  
  return (
    <div className={className + ' outline-1'} style={{width:650}}>

      <div className="flex flex-col space-y-2">

      <div className="flex flex-row items-center space-x-4 cursor-pointer active:opacity-80">
      </div>

        <div className="flex flex-row items-end space-x-4 justify-center">


          <img className="rounded" width="430" height="768" src={imageUrl}></img>
    
        </div>

      </div>
    </div>
  )
}