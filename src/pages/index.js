import * as React from "react"
import Layout from "../components/layout"
import FormComponent from "../components/formComponents/FormComponent"

const IndexPage = () => {
  return (
    <Layout>
      <main className="min-h-screen">
        <FormComponent />
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
