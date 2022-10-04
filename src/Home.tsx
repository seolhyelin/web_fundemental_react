import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div>
        <h2>01</h2>
        <div>
          <Link to="/01/p">Problem 01</Link>
        </div>
        <div>
          <Link to="/01/s">Solution 01</Link>
        </div>
      </div>
    </div>
  )
}
