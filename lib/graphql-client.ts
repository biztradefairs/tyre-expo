// lib/graphql-client.ts

export const PROJECT_ID_VAR = {
    projectId: process.env.NEXT_PUBLIC_CMS_PROJECT_ID,
};

export const UTM_QUERIES = {
    getUtmByProject: `
        query GetUtmByProject($id: String!) {
            getUtmByProject(id: $id) {
                id
                source
                medium
                campaign
                term
                content
                url
                projectId
                createdAt
                updatedAt
            }
        }
    `,
    createUtm: `
        mutation CreateUtm($input: CreateUtmInput!) {
            createUtm(input: $input) {
                id
                source
                medium
                campaign
                term
                content
                url
                projectId
                createdAt
                updatedAt
            }
        }
    `
};

export async function graphqlRequest<T>(
    query: string,
    variables: Record<string, any> = {}
): Promise<{ data?: T; errors?: any[] }> {
    const endpoint = process.env.NEXT_PUBLIC_CMS_GRAPHQL_ENDPOINT;
    if (!endpoint) {
        console.warn('GraphQL endpoint is not defined in environment variables.');
        return { errors: [{ message: 'GraphQL endpoint is not defined' }] };
    }

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, response: ${text}`);
        }

        const json = await response.json();
        return {
            data: json.data,
            errors: json.errors,
        };
    } catch (error: any) {
        console.error('GraphQL request failed:', error);
        return {
            errors: [{ message: error.message || 'Network request failed' }],
        };
    }
}

export async function submitContactForm(projectId: string, input: any) {
    const query = `
        mutation CreateContactFormSubmit($projectId: String!, $input: ContactFormSubmitInput!) {
            createContactFormSubmit(projectId: $projectId, input: $input) {
                id
                email
                formType
            }
        }
    `;
    // Clean up input fields that might not be compatible with CMS GraphQL Schema
    const cleanedInput = { ...input };
    // Remove fields if they are client-only or need normalization
    return graphqlRequest<{ createContactFormSubmit: { id: string } }>(query, {
        projectId,
        input: cleanedInput,
    });
}
