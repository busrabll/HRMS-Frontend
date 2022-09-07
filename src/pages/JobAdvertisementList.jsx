import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'

export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getAllJobAdvertisements().then(result=>setJobAdvertisements(result.data.data))

    })

    return (
        <div>
            <Table celled inverted selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job Position</Table.HeaderCell>
                        <Table.HeaderCell>Job Description</Table.HeaderCell>
                        <Table.HeaderCell>Open Position Count</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Employer</Table.HeaderCell>
                        <Table.HeaderCell>Release Date</Table.HeaderCell>
                        <Table.HeaderCell>Application Deadline</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map(jobAdvertisement => (
                            <Table.Row key={jobAdvertisement.id}>
                                <Table.Cell>{jobAdvertisement.jobPosition}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.openPositionCount}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
