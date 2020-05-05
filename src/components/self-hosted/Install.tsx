import React from 'react'

import styled from '@emotion/styled'
import Kubernetes from '../../resources/kubernetes.svg'
import { colors, sizes, borders } from '../../styles/variables'
import GoogleCloudLogo from '../../resources/google-cloud-logo.svg'
import { Link } from 'gatsby'

interface InstallProps {
    title: string
    img: string
    alt: string
    text: string
    linkPath: string
}

const installs: InstallProps[] = [
    {
        title: "Vanilla Kubernetes",
        img: Kubernetes,
        alt: "Kubernetes",
        text: "All you need is a domain and a Kubernetes cluster.",
        linkPath: '' // Todo add link path here
    },
    {
        title: "Google Cloud Platform",
        img: GoogleCloudLogo,
        alt: "Google Cloud",
        text: " Install Gitpod optimised for Google Cloud Platform.",
        linkPath: '' // Todo add link path here
    }
]

const StyledSection = styled.section`

    text-align: center;
    background: ${colors.offWhite};

    /* ------------------------------------------- */
    /* ----- Section Install ----- */
    /* ------------------------------------------- */

    .install {
        display: flex;
        justify-content: space-between;
        max-width: 75rem;
        margin: 0 auto;
        padding: 4rem 0 5rem;

        @media(max-width: ${sizes.breakpoints.lg}) {
            flex-direction: column;
            align-items: center;
        }

        &__box {
            max-width: 32rem;
            padding: 3rem 2rem;
            background: ${colors.white};
            border: ${borders.light};

            @media(max-width: ${sizes.breakpoints.lg}) {
                margin: 5rem 0 0;
            }

            img {
                height: 6rem;
                margin-bottom: 3rem;
            }

            .btn {
                margin-top: 2rem;
            }
        }

        & + p {
           @media(max-width: ${sizes.breakpoints.lg}) {
                max-width: 70rem;
                margin: 0 auto;
           }
        }

    }

`

const Install = () => (
    <StyledSection className="install__section">
        <div className="row" id="install">
            <h2>Install Self-Hosted Gitpod</h2>
            <div className="install">
                {
                    installs.map(({ title, text, img, alt }: InstallProps, i) => (
                        <div key={`${i}+${title}`}className="install__box">
                            <img src={img} alt={alt} />
                            <h3>{title}</h3>
                            <p>
                                {text}
                            </p>
                            <Link to="/docs/" className="btn">Install Now</Link>
                        </div>
                    ))
                }
            </div>
            <p>Enhanced support for Amazon Elastic Kuberenetes Service(EKS), Azure Kubernetes Service(AKS), and Openshift is coming soon.</p>
        </div>
    </StyledSection>
)

export default Install 