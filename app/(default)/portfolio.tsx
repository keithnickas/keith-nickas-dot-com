import { RoleProvider } from "@/context/role-context"
import { RoleAwareContent } from "./role-aware-content"

export default function RoleAwarePortfolio() {

  return (
    <RoleProvider>
      <RoleAwareContent />
    </RoleProvider>
  )
}
