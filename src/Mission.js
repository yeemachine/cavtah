import React, { Component } from 'react';
import './Mission.css';

class Mission extends Component {
  render() {
    return (
      <div className="Mission">
        <section>
          <p>
           CAVTAH seeks to help resolve fundamental controversies and recalcitrant problems in art history by using visual technologies to highlight connections and distinctions among artworks and their meaning in new ways that everyone should be able to see. This necessarily requires reproductions or visual technologies, which we must learn to use in new and better ways.
        </p>
        <p>
           A central example is <span className="Artist">Rembrandt</span>. Recent scholarship has changed its conclusions about which paintings are by Rembrandt, including famous works.  A major part of the problem is monetary and cultural investment in Rembrandt, which has contributed to inflation of the number of paintings assigned to Rembrandt and thus also confusion about and devaluation of these. 
        </p>
        <p>
When a museum presents you with a Rembrandt, is that the case, and would you know the difference? To put the question more positively, what is distinctive about Rembrandt that makes his works so valuable? Part of the answer is simple. Rembrandt was exceptionally gifted and his works are outstanding, although that fact also contributes to the inflation. Instead of following the money, in the famous phrase of the Watergate informant deep-throat, we have to follow the art, the distinctive qualities of Rembrandt’s works, and his gradual development. 
        </p>
         <p>
Another part of the answer is more complicated. Instead of judging individual paintings in isolation as Rembrandt/not Rembrandt or “A,” “B” or “C,” we need instead to establish connections between paintings by Rembrandt or conversely his between his specific students and followers.<sup>1</sup>  These included, for example in his earliest Leiden period, Gerard Dou, Isaac Jouderville, and his rival Jan Lievens. Also, we need to move from a supposed expert (connoisseur)’s subjective judgments or the objective data of technical examination, which are often not visible to the naked eye and can be interpreted in contrary ways, to visual connections or distinctions among artworks everyone can see.
        </p>
        <p>
….underscore the power of institutions possessing costly machines and artworks subjected to testing at their discretion… more democratic in their openly displayed (visible) and systematic methods, the potential foundation for a new science of art history.
CAVTAH will address the oeuvres of major artists such as Rembrandt, Vermeer, Carel Fabritius, Jan van Eyck, Robert Campin, Giorgione, Leonardo, Mondrian, and Frida Kahlo, as well as unknown artists (Maria Vermeer). Beyond the traditional catalogue raisonné, which treats isolated works in succession, often grouped into abstract categories (e.g. “A,” “B,” “C” in the first volumes of the Rembrandt Research Project’s Corpus of Rembrandt Paintings), CAVTAH’s visual catalogues make it possible to follow the concrete relation between works and the painting-by-painting development of an artist, and their followers, whose paintings are often misattributed to their master. Visual oeuvres can also provide new perspectives on recalcitrant controversies about individual works and other evidence such as X-rays, auto-radiographs, and restorations. Further tasks for visual technologies will comprise reconstructions, such as the unfolding panel program of Van Eyck’s Ghent Altarpiece, and Rembrandt’s Oath of the Batavians before the canvas was cut down.
      </p>
        </section>       
     </div>
    );
  }
}

export default Mission;
