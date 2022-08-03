import '../css/section02.css'

const Section02 = () => {
  return (
    <section className="business">
      <h2><span className="t_b">OUR </span>BUSINESS</h2>
      <p>새로운 미래를 열어가는 무도상회</p>
      <div className="container">
        <figure>
          <div className="inbox">
            <img src="img/building01.jpg" alt=""/>
          </div>
          <div className="cover">
            <h3>주요사업 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nesciunt.</p>
            <a href="">자세히보기</a>
          </div>
        </figure>
        <figure>
          <div className="inbox">
            <img src="img/building02.jpg" alt=""/>
          </div>
          <div className="cover">
            <h3>주요사업 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nesciunt.
              consectetur adipisicing elit.</p>
            <a href="">자세히보기</a>
          </div>
        </figure>
        <figure>
          <div className="inbox">
            <img src="img/building03.jpg" alt=""/>
          </div>
          <div className="cover">
            <h3>주요사업 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nesciunt.</p>
            <a href="">자세히보기</a>
          </div>
        </figure>
        <figure>
          <div className="inbox">
            <img src="img/building04.jpg" alt=""/>
          </div>
          <div className="cover">
            <h3>주요사업 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nesciunt.</p>
            <a href="">자세히보기</a>
          </div>
        </figure>
      </div>
      <div className="inner">
        <div className="tit">
          <strong>심플하지만 다 갖춘 테마</strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolore debitis autem.</p>
        </div>
        <div className="list">
          <ul className="dotList">
            <li>Lorem ipsum dolor </li>
            <li>sit amet consectetur orem ipsum dolor orem ipsum dolor orem ipsum dolor</li>
            <li>dipisicing elit</li>
            <li>Nobis, cupiditate</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Section02