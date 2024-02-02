import './TimeLine.css'

const TimeLine = () => {
    return(
        <section class="timeline">

        <div class="timeline__component">
            <div class="timeline__date timeline__date--right">05 Agosto, 2003</div>
        </div>

        <div class="timeline__middle">
            <div class="timeline__point"></div>
        </div>

        <div class="timeline__component timeline__component--bg">
            <h2 class="timeline__title">Fundação da Clinica</h2>
            <p class="timeline__paragraph">
               Os Primeiros passos...
            </p>
        </div>

        <div class="timeline__component timeline__component--bg">
            <h2 class="timeline__title">O primeiro premio</h2>
            <p class="timeline__paragraph">
                Foi uma surpresa ter ganhado um premio tão importante
            </p>
        </div>

        <div class="timeline__middle">
            <div class="timeline__point"></div>
        </div>

        <div class="timeline__component">
            <div class="timeline__date">22 Agosto, 2003</div>
        </div>

        <div class="timeline__component">
            <div class="timeline__date timeline__date--right">24 Agosto, 1996</div>
        </div>

        <div class="timeline__middle">
            <div class="timeline__point"></div>
        </div>

        <div class="timeline__component timeline__component--bg">
            <h2 class="timeline__title">Mudanças</h2>
            <p class="timeline__paragraph">
                Nesse periodo as dificuldades aparecem
            </p>
        </div>

        <div class="timeline__component timeline__component--bottom timeline__component--bg">
            <h2 class="timeline__title">Hoje</h2>
            <p class="timeline__paragraph">
               Com todas as dificuldades chegamos até aqui.
            </p>
        </div>

        <div class="timeline__middle">
            <div class="timeline__point"></div>
            <div class="timeline__point timeline__point--bottom"></div>
        </div>

        <div class="timeline__component timeline__component--bottom">
            <div class="timeline__date">28 Junho, 2021</div>
        </div>

    </section>
    )
}

export default TimeLine