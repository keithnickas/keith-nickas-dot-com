import Image from "next/image"
import Modal from "../modal"
import { RecruiterCaseStudy } from "../types/talent-craft-case-study-types"

export function HeroImageOrModal({
  mainImage,
  modal,
}: {
  mainImage: RecruiterCaseStudy["mainImage"]
  modal: RecruiterCaseStudy["modal"]
}) {
  const hasContent = mainImage || modal
  if (!hasContent) return null

  const { showOnMobile, size = "lg" } = modal || {}
  const ModalComponent = modal?.component

  return (
    <div className="mb-8 flex justify-center flex-col gap-4">
      {typeof mainImage === "string" ? (
        <Image
          src={mainImage}
          alt="Case Study Main Image"
          width={896}
          height={400}
          className="max-w-xl h-auto rounded-lg"
        />
      ) : (
        mainImage
      )}

      {ModalComponent && typeof ModalComponent === "function" && (
        <Modal size={size} buttonText={modal?.linkText} className="hidden md:flex">
          <ModalComponent />
        </Modal>
      )}
      {ModalComponent && typeof ModalComponent === "object" && (
        <Modal size={size} buttonText={modal?.linkText} className="hidden md:flex">
          {ModalComponent}
        </Modal>
      )}
      <a
        className="md:hidden"
        href={modal?.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {modal?.linkText}
      </a>
    </div>
  )
}
