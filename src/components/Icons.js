function Icons() {
  return (
    <ul className='cards_box-socialmedia'>
      <li className='cards_box-socialmedia--item'>
        <i className='fas fa-mobile-alt cards_box-icon-social js-preview-phone js-social'>
          <a href=''></a>
        </i>
      </li>

      <li className='cards_box-socialmedia--item'>
        <i className='far fa-envelope cards_box-icon-social js-social'>
          <a className='js-preview-mail'></a>
        </i>
      </li>

      <li className='cards_box-socialmedia--item'>
        <a className='js-preview-linkedin' target='_blank' href=''>
          <i className='fab fa-linkedin-in cards_box-icon-social js-social'></i>
        </a>
      </li>
      <li className='cards_box-socialmedia--item'>
        <a className='js-preview-github' target='_blank' href=''>
          <i className='fab fa-github-alt cards_box-icon-social js-social'></i>
        </a>
      </li>
    </ul>
  );
}

export default Icons;
