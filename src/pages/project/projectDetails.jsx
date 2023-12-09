import React, { useParams } from 'react'

const ProjectDetails = () => {
    const { projectId } = useParams();
  return (
    <div>
      {projectId}
    </div>
  )
}

export default ProjectDetails
