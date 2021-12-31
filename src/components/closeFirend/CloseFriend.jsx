import "../closeFirend/closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <li className='sidebarFriend'>
      <img src={user.profilePicture} alt='' className='sidebarFriendImg' />
      <span className='sidebarFirendname'>{user.username}</span>
    </li>
  );
}
