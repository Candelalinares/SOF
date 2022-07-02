import React from 'react';
import Article from '../components/Article';
import { blog01, blog02, blog03, blog04, blog06, blog07, blog08, blog09, blog10,blog11 } from '../components/import';
import './blog.css';
import estrella from '../assets/estrella.png'

const Blog = () => (
  <div className="gpt3__blog section__padding" id="team">
    <div className="gpt3__blog-heading">
      <div className='gradient__text'>
      <h1 className="gradient__text">THE TEAM</h1>
      <p>The SOF project came to be in Buenos Aires, Argentina. </p>
      <p>A group of creatives, professionals and investors wanted to try out a crazy new idea.</p>
      <p>Tell a narrative story from within the NFT market. Make use of the tokens as pieces of something larger that could enhance the level of interaction that can be had with an audience worldwide.</p>
      <p>But also, enhancing the NFT market and community in general by giving them quality tokens, content and other stuff that’s yet to come.</p>

      </div>
    </div>
    <div className="gpt3__blog-container">
        <div className='at_itemb'>
          <img src={estrella} className='img' alt='' />
        </div>

      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog01} date="Marketing Manager" text="Alejandro Duarte" social="alejandroalfredoduarte@gmail.com" />
        <Article imgUrl={blog02} date="Productor Audiovisual" text="Lucas Gamboa" social="girodigitalarg@gmail.com "/>
        <Article imgUrl={blog03} date="Iñaki Arredondo" text="Guionista" social="ciamaiztegui@gmail.com "/>
        <Article imgUrl={blog04} date="Yesica Vivas" text="Marketing y E-Commerce" social="vivasyesicavaleria@gmail.com"/>
        <Article imgUrl={blog06} date="Brian Ansaldo" text="Asesor Comercial" social="braianansaldo@gmail.com "/>
        <Article imgUrl={blog07} date="Martina Meisner" text="Recursos Humanos" social="martugirodigital@gmail.com"/>
        <Article imgUrl={blog08} date="Melanie Pardo" text="Productora Audiovisual" social="melaniepardom@gmail.com "/>
        <Article imgUrl={blog09} date="Joel Delgado" text="Diseñador Industrial y 3D" social="joeldelgado091@gmail.com"/>
        <Article imgUrl={blog10} date="Santiago Tártaro" text="Moderador Discord y RRSS" social="tarsan02@gmail.com "/>
        <Article imgUrl={blog11} date="Belen Sanchez" text="Diseño gráfico" social="bele.grafica@gmail.com"/>
      </div>
    </div>
  </div>
);

export default Blog;