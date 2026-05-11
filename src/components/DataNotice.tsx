import { AlertTriangle } from 'lucide-react'
import { DATA_SOURCE_NOTE } from '../types/tourism'

interface DataNoticeProps {
  detail?: string
}

function DataNotice({ detail }: DataNoticeProps) {
  return (
    <aside className="data-notice" aria-label="数据说明">
      <AlertTriangle aria-hidden="true" size={20} />
      <div>
        <strong>{DATA_SOURCE_NOTE}</strong>
        {detail ? <p>{detail}</p> : null}
      </div>
    </aside>
  )
}

export default DataNotice
