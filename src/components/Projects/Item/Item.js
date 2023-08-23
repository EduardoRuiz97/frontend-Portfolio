export default function Item(props) {
  return (
    <li className="project">
      <div className="project__content">

        <img src={props.project.image.desktop} alt={props.project.description}></img>

        <h4>{props.project.name}</h4>

        <small>{props.project.description}</small>

        <div className="project__content__tools">
          {props.project.tools.map(item => <span key={item}>{item}</span>)}
        </div>

        <div className="project__content__actions">

          <a href={props.project.codeUrl} target='_blank'>
            <button>View code</button>
          </a>

          <a href={props.project.liveSite} target='_blank'>
            <button>View project</button>
          </a>
          
        </div>

      </div>
    </li>
  )
}