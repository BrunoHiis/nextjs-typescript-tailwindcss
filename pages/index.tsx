import React from "react"
import OrganizationService from "../components/services/organization.service"
import SubmissionService from "../components/services/submission.service"
import UserService from "../components/services/user.service"

const index: React.FC = ({
  subdomain,
  initialOrgData,
  initialSubmissionData,
  initialTotalPages,
  initialUserData,
}: any) => {
  console.log({ subdomain, initialOrgData, initialSubmissionData })
  return <div>Test</div>
}

export const getServerSideProps = async (context: any) => {
  try {
    const subdomain = context.req.headers.host.split(".")[0]
    if (subdomain !== "auth") {
      const { data: initialOrgData } = await OrganizationService.checkOrganization(
        subdomain
      )
      // Check if organization exists before continueing
      if (initialOrgData === 404 || initialOrgData === 400) {
        context.res.statusCode = 302
        context.res.setHeader("Location", `/404`)
        return { props: {} }
      }

      const { data: submissionRes } = await SubmissionService.filterSubmissions(
        "Recent",
        ["In Review", "In Progress", "Planned", "Completed", "Rejected"],
        [],
        subdomain,
        1,
        10
      )
      const initialSubmissionData = submissionRes.results
      const initialTotalPages = submissionRes.totalPages

      const { data: initialUserData } = await UserService.getUser(
        context.req.headers.cookie
      )

      // Pass data to the page via props
      return {
        props: {
          subdomain,
          initialOrgData: initialOrgData || null,
          initialSubmissionData: initialSubmissionData || null,
          initialTotalPages: initialTotalPages || null,
          initialUserData: initialUserData || null,
        },
      }
    } else {
      return { props: { subdomain } }
    }
  } catch (error) {
    console.log(error)
  }
}

export default index
